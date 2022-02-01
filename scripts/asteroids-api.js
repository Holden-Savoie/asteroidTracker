const key = 'ZSWisRhq2bFm124Vh78dzAUnCi4oGVR3Z31rMxlr';

const dataHolder = document.querySelector('.data-holder');


const getDate = async () => {
    const response = await fetch('http://localhost:3000/datePost');
    console.log(response);
    const data = await response.json();
    console.log(data);
    return data;
};