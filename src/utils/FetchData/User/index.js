export async function login(email, password) {
    const response = await fetch(process.env.REACT_APP_API.concat('/user-login'), {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({ email, password })
    });
    return await response.json();
}


export async function profile() {
    
}