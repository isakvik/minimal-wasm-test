
async function run() {
    const importObject = {
      env: { js_console: console.log },
    };

    const { instance } = await WebAssembly.instantiateStreaming(
        fetch("./main.wasm"),
        importObject
    );
    
    console.log("add(2,3): ", instance.exports.add(2,3));
    console.log("main(): ", instance.exports.main());
    return instance;
};

const a = run();