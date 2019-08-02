const Bundler = require('parcel-bundler');
const Path = require('path');
const { execSync } = require('child_process');

const entryFiles = [
    Path.join(__dirname, '/src/index.html')
];

const options = {
    outDir: './www',
    publicUrl: '/',
    watch: true,
    minify: false
};

(async () => {
    console.log(entryFiles);
    
    const bundler = new Bundler(entryFiles, options);

    bundler.on('buildEnd', () => {
        const postBuildFile = Path.join(__dirname, './some-script.sh');
        console.log(`running: ${postBuildFile}`);
        const stdout = execSync(`${postBuildFile}`);
        // Do things with stdout
    });

    const bundle = await bundler.bundle();
})();