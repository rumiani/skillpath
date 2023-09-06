const postData = async (url, data) => {  
    fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => { 
        console.log(response);
        return response;
      })
      .catch(error => {
        console.error('Error posting data:', error);
        throw error;
      });
  };

export default postData;