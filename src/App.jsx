import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { Intuition, Complexity, Mistakes, RelatedProblems, InterviewTips } from './components/solution/ContentSection';
import { problemsData } from './data/problems';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import ProblemHeader from './components/solution/ProblemHeader';
import CodeDisplay from './components/solution/CodeDisplay';
import Visualizer from './components/visualization/Visualizer';

function ProblemPage() {
  const { problemId } = useParams();
  const data = problemsData[problemId];

  if (!data) return <div>Problem Not Found</div>;

  return (
    <>
    <Navbar />
    <div className="page-container">
      <main className="main-content">
        <ProblemHeader data={data} />
        <CodeDisplay snippets={data.codeSnippets} />
        <Intuition steps={data.intuition} />
        <Visualizer steps={data.visualSteps} />
        <Complexity data={data.complexity} />
        <InterviewTips tips={data.tips} />
        <Mistakes mistakes={data.mistakes} />
        <RelatedProblems problems={data.related} />
      </main>
      <Sidebar stats={data} />
    </div>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/problem/:problemId" element={<ProblemPage />} />
      </Routes>
    </BrowserRouter>
  );
}