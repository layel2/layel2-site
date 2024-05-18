// import styles from './css/style.css'

export default function Page() {
  // const styles = {
  //   abc: {
  //     fontSize: '16px',
  //     background: '#e4edf9',
  //     padding: '5px 15px',
  //     display: 'inline-block',
  //     fontWeight: 600,
  //     marginBottom: '10px',
  //   },
  // };
  return (
    <section>
      <div >
          <h2 className="mb-6 text-6xl">Project</h2>
        </div>
        
        <div className="bg-black text-white min-h-screen p-4 space-y-6">


        <div className="bg-gray-800 shadow-md rounded p-6">
        <h3 className="text-xl font-bold mb-2">Lecture</h3>
        <p>• (2024) GitHub, GitHub Action and Hugging face for SuperAI Engineer Season 4</p>
        <p>• (2024) Git version control, ML for timeseries and MLOps B.grimm Power</p>
        <p>• (2023) Basic Machine Learning Lab for Provincial Electricity Authority (PEA)</p>
        <p>• (2023) Basic of Image Processing for SuperAI Engineer Season 3  <a href="https://mooc.aiat.or.th/courses/course-v1:AIAT+IPR1011+2024" target="_blank" className="text-blue-400 hover:underline">(Link)</a> </p>
        <p>• (2023) Pytorch for SuperAI Engineer Season 2  <a href="https://www.youtube.com/watch?v=zAYPa9-cXOY" target="_blank" className="text-blue-400 hover:underline">(Link)</a> </p>
        <p>• (2023) Python Mutiprocessing for SuperAI Engineer Season 2  <a href="https://www.youtube.com/watch?v=yrFAv8CGZT8" target="_blank" className="text-blue-400 hover:underline">(Link)</a> </p>
        <p>• (2023) Python OOP for SuperAI Engineer Season 2  <a href="https://youtu.be/-Pv2LvUK6Qw" target="_blank" className="text-blue-400 hover:underline">(Link)</a> </p>
        <p>• (2023) Git version control for SuperAI Engineer Season 2  <a href="https://mooc.aiat.or.th/courses/course-v1:AIAT+PAT1002+2023" target="_blank" className="text-blue-400 hover:underline">(Link)</a> </p>
      </div>


        <div className="bg-gray-800 shadow-md rounded p-6">
        <h3 className="text-xl font-bold mb-2">Collaborative Defense-GAN for protecting adversarial attacks on classification system</h3>
        <p className="text-gray-300">2020-2023</p>
        <p>Master's thesis.</p>
        <p>Published at Expert Systems with Applications Volume 214, 15 March 2023,.</p>
        <p>
          Link: <a href="https://www.sciencedirect.com/science/article/abs/pii/S0957417422019753" target="_blank" className="text-blue-400 hover:underline">https://www.sciencedirect.com/science/article/abs/pii/S0957417422019753</a>
        </p>
      </div>

      <div className="bg-gray-800 shadow-md rounded p-6">
        <h3 className="text-xl font-bold mb-2">Initialization of Random Vectors to Enhance Defense-GAN for Image Classification</h3>
        <p className="text-gray-300">2020-2022</p>
        {/* <p>Master's thesis.</p> */}
        <p>Published at 2022 International Electrical Engineering Congress (iEECON)</p>
        <p>
          Link: <a href="https://ieeexplore.ieee.org/document/9741663" target="_blank" className="text-blue-400 hover:underline">https://ieeexplore.ieee.org/document/9741663</a>
        </p>
      </div>

        <div className="bg-gray-800 shadow-md rounded p-6">
        <h3 className="text-xl font-bold mb-2">Power system reliability analysis with Provincial Electricity Authority (PEA).</h3>
        <p className="text-gray-300">2022</p>
        {/* <p>Analyze hypertension and hypertensive disease from annual health data of Thai military</p> */}
      </div>


      <div className="bg-gray-800 shadow-md rounded p-6">
        <h3 className="text-xl font-bold mb-2">Hypertensive Analysis - Phramongkutklao College of Medicine</h3>
        <p className="text-gray-300">2020 - 2021</p>
        <p>Analyze hypertension and hypertensive disease from annual health data of Thai military</p>
      </div>

      <div className="bg-gray-800 shadow-md rounded p-6">
        <h3 className="text-xl font-bold mb-2">Rain prediction - Hydro-Informatics Institute (Public Organization) Bangkok, Thailand</h3>
        <h5 className="text-gray-300">2019 - 2020</h5>
        <p>Analysis of air quality and meteorological data that influence rainfall in Smart Big Data Analytics for City Life Quality Improvement project.</p>
      </div>

      <div className="bg-gray-800 shadow-md rounded p-6">
        <h3 className="text-xl font-bold mb-2">Class timetable management system (website) for Electrical Engineering Kasetsart University</h3>
        <p className="text-gray-300">2019 - 2020</p>
        {/* <p>
          Link: <a href="http://ee-course.herokuapp.com" target="_blank" className="text-blue-400 hover:underline">ee-course.herokuapp.com</a>
        </p> */}
      </div>

      <div className="bg-gray-800 shadow-md rounded p-6">
        <h3 className="text-xl font-bold mb-2">Human pose estimation using traditional image feature extraction</h3>
        <p className="text-gray-300">2019 - Image Processing and Representation course at Kasetsart University</p>
        <p>Use fall detection dataset to predict human pose eg. stand sit sleep.</p>
        <p>Extract feature using 7 HU Moment, LBP, HOG and evaluate class separability with scatter matrices, divergence and predict with KNN classifier.</p>
        <p>Segmentation using motion analysis MOG background subtractor.</p>
        <p>
          Resource: <a href="https://github.com/layel2/image_processing_course/" className="text-blue-400 hover:underline">layel2/image_processing_course (github.com)</a>
        </p>
      </div>

      <div className="bg-gray-800 shadow-md rounded p-6">
        <h3 className="text-xl font-bold mb-2">Study the use case of Adversarial Example for reduce overfitting in remote sensing data (Multispectral image)</h3>
        <p className="text-gray-300">2019 - Remote Sensing course at Kasetsart University</p>
        <p>Attempt to use Adversarial Example to reduce overfitting in land cover mapping application.</p>
        <p>
          Resource: <a href="https://github.com/layel2/Remote-sensing" className="text-blue-400 hover:underline">layel2/Remote-sensing (github.com)</a>
        </p>
      </div>

      <div className="bg-gray-800 shadow-md rounded p-6">
        <h3 className="text-xl font-bold mb-2">Cryptocurrency Arbitrage software.</h3>
        <p className="text-gray-300">2018 - 2019 Senior Project</p>
        <p>Use API from bx.in.th (out of business) and bittrex.com for comparing price differences to make profit with trade algorithm.</p>
        <p>
          Resource: <a href="https://github.com/layel2/Crypto-arbitrage" className="text-blue-400 hover:underline">layel2/Crypto-arbitrage (github.com)</a>
        </p>
      </div>
    </div>
          
    </section>
  )
}
