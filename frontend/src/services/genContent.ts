async function genContent(data: any) {
    try {
        const response = await fetch("http://localhost:5000/api/genContent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

        const result = await response.json();

        return result; 
    } catch (err: any) {
        console.log(err);
    } 
}

export default genContent;