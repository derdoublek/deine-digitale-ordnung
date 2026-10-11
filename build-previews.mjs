import {createRequire} from 'node:module';
import path from 'node:path';
const req=createRequire(new URL('./preview-src/package.json',import.meta.url));
const {build}=await import(req.resolve('vite'));
const react=(await import(req.resolve('@vitejs/plugin-react'))).default;
const tw=(await import(req.resolve('@tailwindcss/postcss'))).default;
for(const kind of ['team','commission'])await build({configFile:false,root:path.resolve('preview-src',kind),base:'./',plugins:[react()],resolve:{alias:{'@':path.resolve('preview-src')}},css:{postcss:{plugins:[tw()]}},build:{outDir:path.resolve('previews',kind),emptyOutDir:true}});
