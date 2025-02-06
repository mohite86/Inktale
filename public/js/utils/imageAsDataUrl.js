const imageAsDataURL = (imageBlob) => {
    const fileReader = new FileReader();

    fileReader.readAsDataURL(imageBlob);

    return new Promise((resolve, reject) => {

        fileReader.addEventListener('load', () => {
            resolve(fileReader.result);
        });

        fileReader.addEventListener('error', () => {
            reject(fileReader.error);
        });

    });
}

export default imageAsDataURL;