import { BlogPosts } from 'app/components/posts'
import {Experience} from 'app/components/exp'
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
      <h1 className="mb-8 text-6xl font-semibold tracking-tighter">
        Layel2
        {/* {Experience('A')} */}
      </h1>
      <h1 className="mb-8 text-4xl font-semibold tracking-tighter">
        Pranpaveen Laykaviriyakul (Lay)
      </h1>
      <p className="mb-4">
        {`I'm Lay Machine Learnging Engineer & Researcher at`} <a href="https://graffity.tech"> GRAFFITY TECHNOLOGIES </a>
        {`and also part-time with DEEPCAPITAL as a AI and Devops Engineer.`}
        <br></br>
        {`Interesting in Machine Learning, AI, MLOps, Computer Vision, Cloud, Backend and Deployment.`}
      </p>
      <h3 className="mb-8 text-4xl font-semibold tracking-tighter">Experience</h3>
      {
        Experience(
          "Machine Learning Engineer & Researcher",
          "Graffity Technologies Co.,Ltd, Bangkok, Thailand",
          "Mar 2023 - Present",
          [
            "Designed and Build scalable ML service infrastructure on AWS.",
            "Implemented Kubeflow for experimental and pipeline execution on on-premises servers.",
            "Managed Kubernetes clusters using EKS on AWS and microk8s on-premises environments.",
            "Configured CI/CD pipelines using Jenkins, GitHub Actions, and ArgoCD for seamless deployment.",
            "Designed and developed ML and non-ML services, along with automation tools, using Python and Golang.",
            "Optimize ML model efficiency, codebase, and node(GPU, Aws Inf) performance to achieve optimal results.",
            "Research and implemented solutions in computer vision, feature matching, visual localization, and SFM reconstruction."
          ],
        )
      }
      {
        Experience(
          "AI/DevOps Engineer",
          "Deepcapital Co.,Ltd, Bangkok, Thailand",
          "Apr 2023 - Present",
          [
            "DevOps Engineer (Jan 2024 - Presesnt)",
            "AI Engineer (Apr 2023 - Present)",
          ],
           new Map<number, string[]>([
            [
              0, [
                "Designed and developed pipelines for a complex AI system (AI visual avatar project).",
                "Setup and POC infrastructure on Huawei Cloud, utilizing tools such as ECS, CCE, SFS, RDS, OBS and SWR.",
                "Implemented pipeline workflows on Kubeflow and managed system deployment on Kubernetes (Huawei CCE).",
                "Reviewed code from AI engineer tests and managed versioning for releases.",
                "Produced issue reports and tracked their resolution.",
                "Implemented automation tools, including CI/CD processes",
              ],
            ],
            [
              1, [
                "Desgined and developed ML related application.",
                "Implement backend systems using Python (FastAPI) and Golang (Fiber, Gorm), with integration of PostgreSQL, Redis, Auth0, S3 and AWS Lambda.",
                "Established infrastructure on AWS, including deployment on EKS (AWS Kubernetes).",
                "Implemented CI/CD pipelines using Github Actions and ArgoCD.",
              ]
            ]
          ])
        )
      }
      {
        Experience(
          "Data Scientist",
          "Big C Supercenter Public Company Limited, Bangkok, Thailand",
          "Sep 2022 - Mar 2023",
          [
            "Data Scientist in Digital Platform, HPC & Big Data Team",
            "Research and develop ML models to improve product search system.",
            "Research in clustering for customer data platform.",
            "Build API for ML service and dockerized service for deployment.",
            "Optimize and performance test to increase model efficiency.",
          ],
        )
      }
      {
        Experience(
          "Backend Developer",
          "Freelance",
          "Aug 2022 - Feb 2023",
          [
            "Backend developer for online assessment platform.",
            "Develop API using Django and FastAPI.",
            "Krakend API gateway with endpoint authentication.",
            "Work with postgresql, redis and keycloak.",
            "Deploy service on AWS (EC2, EKS, RDS etc.).",
          ],
        )
      }
      {
        Experience(
          "Research Assistant",
          "Kasetsart University",
          "Nov 2019 - Dec 2022",
          [
            "Power system reliability analysis with Provincial Electricity Authority (PEA).",
            "Analysis of Thailand's military annual health data that cause hypertension and hypertensive diseases with Phramongkutklao College of Medicine.",
            "Analysis of air quality and meteorological data that influence rainfall in Smart Big Data Analytics for City Life Quality Improvement project with Hydro-Informatics Institute (Public Organization) Bangkok, Thailand.",
            "Develop class timetable management system for Department of Electrical Engineering.",
          ],
        )
      }
      {
        Experience(
          "Intelligence Transportation Engineer",
          "Elixir Software Co.,Ltd, Bangkok, Thailand",
          "Mar 2021 - May 2021",
          [
            "Short-term work as part of Super AI Engineer program by AIAT(Artificial Intelligence Association of Thailand).",
            "Smart road project collaboration with Thai Department of Rural Roads.",
            "Develop a workflow to process data from CCTV devices.",
            "Research, Develop and Deploy machine learning service with video data.",
            "Detect, track, finding lanes, and estimate car speed from CCTV video.",
            "Use thingsboard IOT platform to visualize and manage devices.",
          ],
        )
      }

      <h3 className="mb-8 text-4xl font-semibold tracking-tighter">Education</h3>
      {
        Experience(
          "Master of Engineering & Electrical Engineering",
          "Kasetsart University, Bangkok, Thailand",
          "July 2019 - May 2022",
         ["Reserched in Deep learning Adversarial example."],
        //  new Map<number, string[]>([
        //   [0, ["a","b"]]
        //  ])
        )
      }
      {
        Experience(
          "Bachelorof Engineering & Electrical Engineering",
          "Kasetsart University, Bangkok, Thailand",
          "Aug 2015 - May 2019",
         ["Major in Telecomunication Engineering"],
        )
      }

      
      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  )
}
