class Requester {

    getJSON(url) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url,
                method: "GET",
                contentType: "application/json",
                success: (response) => {
                    resolve(response);
                }
            });
        });
    }
}
const requester = new Requester();
export { requester };