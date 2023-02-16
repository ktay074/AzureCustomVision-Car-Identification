import React from 'react';
import axios from "axios"; 
import './ImageUpload.css'; 

class ImageUpload extends React.Component {
    state = {
      file: null,
      predictions: null,
    };
  
    handleFileChange = event => {
      this.setState({ file: event.target.files[0] });
    };
    
    // Handles the submission of data to the API 
    handleSubmit = async event => {
      event.preventDefault();
      const { file } = this.state;
      const apiKey = '3703b08f6f3b412ab5184142ecb32065';
      const formData = new FormData();
      formData.append('image', file);

      const endpoint = 'https://turnersvehicles-prediction.cognitiveservices.azure.com/customvision/v3.0/Prediction/fef8ddf6-dead-49a7-9205-a3a60486bfbc/classify/iterations/Iteration1/image';
      
      const headers = { 'Prediction-Key': apiKey,
                        'Content-Type': 'application/octet-stream' };

      try {
        const response = await axios.post(endpoint, formData, { headers });
        console.log(response.data);

        // Sorts the highest prediction provided by AI and displays it 
        const sortedPredictions = response.data.predictions.sort((a, b) => b.probability - a.probability); 
        const highestPrediction = sortedPredictions[0]; 
        this.setState({ predictions: [highestPrediction] });

      } catch (error) {
        console.error(error);
        this.setState({ predictions: null });
      }
    };
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <input type="file" onChange={this.handleFileChange} />

          <button type="submit">
                Upload and Classify Image
          </button>


          {this.state.predictions && (
            <ul>
              {this.state.predictions.map(prediction => (
                <li key={prediction.tagName}>{prediction.tagName}</li>
              ))}
            </ul>
          )}
        </form>
      );
    }
  }
  
export default ImageUpload 