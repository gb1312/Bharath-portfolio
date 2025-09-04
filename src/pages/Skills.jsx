import Section from '../components/SectionWrapper.jsx'

const skills = {
  'Programming': ['Python', 'SQL (PostgreSQL, MySQL, T-SQL, SparkSQL, HiveQL)', 'R', 'Bash', 'Scala', 'MATLAB'],
  'Visualization': ['Power BI', 'Tableau', 'Looker', 'Excel', 'Matplotlib', 'Plotly'],
  'Data Science': ['Statistical & Risk Modeling', 'Inferential Statistics', 'A/B Testing', 'Data Mining', 'Data Modeling', 'Loss Prevention'],
  'Big Data': ['Hadoop', 'Apache Spark', 'Apache Flink', 'Apache Kafka', 'HDFS'],
  'ML & AI': ['TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn', 'OpenCV', 'CNN', 'FlinkML', 'NLP', 'Kubernetes', 'LLM Agents', 'LangChain', 'RAG', 'Reinforcement Learning', 'Prompt Engineering', 'Diffusion Models'],
  'Cloud & Platforms': ['AWS', 'Azure', 'GCP', 'Microsoft Fabric', 'Databricks', 'Snowflake', 'Docker', 'PySpark', 'Hadoop', 'Git', 'BigQuery'],
  'Tools': ['SSIS', 'SSAS', 'SSRS', 'Power Automate', 'Airflow', 'dbt', 'Alteryx', 'GIT', 'Docker'],
  'Certifications': ['AWS Certified Solutions Architect — Associate (In Progress)']
}

export default function Skills(){
  const groups = Object.entries(skills)
  return (
    <Section title="Skills" subtitle="My toolbox">
      {groups.map(([cat, items])=> (
        <div key={cat} className="card" style={{padding:20}}>
          <h3>{cat}</h3>
          <div className="badges" style={{marginTop:8}}>
            {items.map(s=> <span className="badge" key={s}>{s}</span>)}
          </div>
        </div>
      ))}
    </Section>
  )
}
