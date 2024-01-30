call npx nx build native-federation
call npx nx build native-federation-core
call npx nx build native-federation-runtime
call npx nx build native-federation-esbuild

call node post-build-nf.js

