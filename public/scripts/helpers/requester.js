class Requester {

    getJSON(url, opts) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url,
                data: opts,
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