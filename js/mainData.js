const mainData = () => {
    fetch('./db.json')
        .then((response) => {
            return response.json()
        })
}

mainData()