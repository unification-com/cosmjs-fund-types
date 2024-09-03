#!/usr/bin/env bash
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

for dir in ibc-go wasmd mainchain ; do
  rm -rf "protos/$dir"
  mkdir -p "protos/$dir"
  echo "Autogenerated folder, see export_protos.sh" > "protos/$dir/README.md"

  buf export "protos/$dir-src/" --output "protos/$dir"
done
