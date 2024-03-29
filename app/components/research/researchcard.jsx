import { useEffect, useState } from 'react';


export default function ResearchPage() {
  const [research, setResearch] = useState([]);

  useEffect(() => {
    async function fetchResearch() {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/research');
        const data = await response.json();
        setResearch(data.student); // Assuming 'student' is the array of research items in your API response
      } catch (error) {
        console.error('Error fetching research data:', error);
      }
    }

    fetchResearch();
  }, []);

  return (
    <div>
      <h1>Research Items</h1>
      <div className="research-cards">
        {research.map(item => (
          <div key={item.id} className="research-card">
           
            {/* Add more details as needed */}
            <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.ResearchTitle}</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">{item.abstract}</p>
</a>
          </div>
        ))}
      </div>
    </div>
  );
}
