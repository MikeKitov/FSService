function MyFunction() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("sdfsf");
        }, 1000);
    });
}

function MyFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("2323");
        }, 6000);
    });
}
  
async function run() {
try {
        const result = await MyFunction();

        console.log(result);
    } catch (error) {
        console.error(error);
    } finally {

    }
}

async function run2() {
try {
        const result = await MyFunction2();

        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

run2();
run();