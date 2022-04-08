set -e
yarn build
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f ${https://github.com/fifisshh/dejavu_design.git} master:gh-pages
cd -