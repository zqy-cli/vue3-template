#!/bin/bash
# Use -gt 1 to consume two arguments per pass in the loop (e.g. each
# argument has a corresponding value to go with it).
# Use -gt 0 to consume one or more arguments per pass in the loop (e.g.
# some arguments don't have a corresponding value to go with it such
# as in the --default example).
# note: if this is set to -gt 0 the /etc/hosts part is not recognized ( may be a bug )
# http://stackoverflow.com/questions/192249/how-do-i-parse-command-line-arguments-in-bash
while [[ $# -gt 0 ]]
do
key="$1"

case $key in
    -v|--verbose)
    VERBOSE="YES"
    ;;
    -c|--clean)
    CLEAN="YES"
    ;;
    -r|--registry)
    OVERRIDE_REGISTRY="YES"
    REGISTRY="$2"
    shift # past argument
    ;;
    *)
            # unknown option
    ;;
esac
shift # past argument or value
done

#echo "Set sass_binary_path to .npmrc"
#npm config set sass_binary_path "$PWD/build/node-sass/linux-x64-57_binding.node"

LOG_LEVEL=" --loglevel warn"
if [ "$VERBOSE" == "YES" ];then
    LOG_LEVEL=" --loglevel silly"
fi

echo "Setting log level to: $LOG_LEVEL"

rm -rf dist

if [ "$CLEAN" == "YES" ];then
    echo "Cleaning existing npm packages"
    rm -rf node_modules/*
fi

export PATH=.:/opt/maven/bin:/opt/node16/bin:$PATH:/opt/dmdbms/bin
echo "Node version is $(node -v 2>&1)"
echo "install packages"
pnpm install

echo "Building..."
# npm run dll $LOG_LEVEL          # deleted since 0.11 does not need dll.
pnpm run build $LOG_LEVEL

echo "Packaging..."
pushd dist/
tar -cf report.tar *
mv report.tar ../
popd

exit 0

