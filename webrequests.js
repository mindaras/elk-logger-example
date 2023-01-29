const axios = require('axios')

const addresses = [
    'aardvark@the.zoo',
    'crocodile@the.zoo',
    'elephant@the.zoo',
    'emu@the.zoo',
    'hippopotamus@the.zoo',
    'llama@the.zoo',
    'octopus@the.zoo',
    'otter@the.zoo',
    'panda@the.zoo',
    'pangolin@the.zoo',
    'tortoise@the.zoo',
    'walrus@the.zoo'
];

const method = [
    'get',
    'put',
    'post'
];

async function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}

(async () => {
    while (true) {
        var type = Math.floor(Math.random() * method.length);
        var email = Math.floor(Math.random() * addresses.length);
        var sleeping = Math.floor(Math.random() * 9) + 1;

        switch (method[type]) {
            case 'get':
                try {
                    const response = await axios.get('http://localhost:3000/', {
                        headers: {
                            from: addresses[email]
                        }
                    })
                    console.log(response.data)
                } catch (error) {
                    console.log(error.message);
                }
                break; // end case 'get'
            case 'put':
                try {
                    const response = await axios.put('http://localhost:3000/', {
                        headers: {
                            from: addresses[email]
                        }
                    })
                    console.log(response.data);
                } catch (error) {
                    console.log(error.message);
                }
                break; // end case 'put'
            case 'post':
                try {
                    const response = await axios.post('http://localhost:3000/', {
                        headers: {
                            from: addresses[email]
                        }
                    })
                    console.log(response.data);
                } catch (error) {
                    console.log(error.message);
                }
                break; // end case 'post'
        } // end switch on method
    await sleep(sleeping * 1000);
    }
})();