import asyncUploadUser from './100-await.js';

const test = async () => {
    const value = await asyncUploadUser();
    console.log(value);
};

test();
