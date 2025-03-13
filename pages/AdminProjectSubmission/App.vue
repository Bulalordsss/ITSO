<template>
  <div class="app-container">
    <header class="app-header">
      <h1>Projects/Submissions</h1>
      <div class="search-container">
        <input type="text" placeholder="Search Project" class="search-input" />
        <button class="search-button">
          <SearchIcon class="search-icon" />
        </button>
        <button class="filter-button">
          <SlidersIcon class="filter-icon" />
        </button>
      </div>
    </header>

    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th style="width: 15%">Type of Application</th>
            <th style="width: 35%">Title of the Research</th>
            <th style="width: 20%">Department</th>
            <th style="width: 10%">Date</th>
            <th style="width: 10%">Status</th>
            <th style="width: 10%">View</th>
          </tr>
        </thead>
        <tr class="filter-row">
          <td>
            <div class="filter-input-container">
              <input type="text" placeholder="Search by Application" class="filter-input" />
              <button class="filter-input-button">
                <SearchIcon class="filter-input-icon" />
              </button>
              <button class="filter-input-button">
                <FilterIcon class="filter-input-icon" />
              </button>
            </div>
          </td>
          <td>
            <div class="filter-input-container">
              <input type="text" placeholder="Search by Title" class="filter-input" />
              <button class="filter-input-button">
                <SearchIcon class="filter-input-icon" />
              </button>
              <button class="filter-input-button">
                <FilterIcon class="filter-input-icon" />
              </button>
            </div>
          </td>
          <td>
            <div class="filter-input-container">
              <input type="text" placeholder="Search by Department" class="filter-input" />
              <button class="filter-input-button">
                <SearchIcon class="filter-input-icon" />
              </button>
              <button class="filter-input-button">
                <FilterIcon class="filter-input-icon" />
              </button>
            </div>
          </td>
          <td>
            <div class="filter-input-container">
              <input type="text" placeholder="Search by Date" class="filter-input" />
              <button class="filter-input-button">
                <SearchIcon class="filter-input-icon" />
              </button>
              <button class="filter-input-button">
                <FilterIcon class="filter-input-icon" />
              </button>
            </div>
          </td>
          <td>
            <div class="filter-input-container">
              <input type="text" placeholder="Search by Status" class="filter-input" />
              <button class="filter-input-button">
                <SearchIcon class="filter-input-icon" />
              </button>
              <button class="filter-input-button">
                <FilterIcon class="filter-input-icon" />
              </button>
            </div>
          </td>
          <td></td>
        </tr>
        <tbody>
          <tr v-for="(project, index) in projects" :key="index">
            <td>{{ project.type }}</td>
            <td>{{ project.title }}</td>
            <td>{{ project.department }}</td>
            <td>{{ project.date }}</td>
            <td :class="getStatusClass(project.status)">{{ project.status }}</td>
            <td>
              <button class="view-button">
                <EyeIcon class="view-icon" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, h } from 'vue';

// Custom icon components
const SearchIcon = () => h('svg', { 
  xmlns: 'http://www.w3.org/2000/svg', 
  width: '24', 
  height: '24', 
  viewBox: '0 0 24 24', 
  fill: 'none', 
  stroke: 'currentColor', 
  strokeWidth: '2', 
  strokeLinecap: 'round', 
  strokeLinejoin: 'round' 
}, [
  h('circle', { cx: '11', cy: '11', r: '8' }),
  h('line', { x1: '21', y1: '21', x2: '16.65', y2: '16.65' })
]);

const SlidersIcon = () => h('svg', { 
  xmlns: 'http://www.w3.org/2000/svg', 
  width: '24', 
  height: '24', 
  viewBox: '0 0 24 24', 
  fill: 'none', 
  stroke: 'currentColor', 
  strokeWidth: '2', 
  strokeLinecap: 'round', 
  strokeLinejoin: 'round' 
}, [
  h('line', { x1: '4', y1: '21', x2: '4', y2: '14' }),
  h('line', { x1: '4', y1: '10', x2: '4', y2: '3' }),
  h('line', { x1: '12', y1: '21', x2: '12', y2: '12' }),
  h('line', { x1: '12', y1: '8', x2: '12', y2: '3' }),
  h('line', { x1: '20', y1: '21', x2: '20', y2: '16' }),
  h('line', { x1: '20', y1: '12', x2: '20', y2: '3' }),
  h('line', { x1: '1', y1: '14', x2: '7', y2: '14' }),
  h('line', { x1: '9', y1: '8', x2: '15', y2: '8' }),
  h('line', { x1: '17', y1: '16', x2: '23', y2: '16' })
]);

const FilterIcon = () => h('svg', { 
  xmlns: 'http://www.w3.org/2000/svg', 
  width: '24', 
  height: '24', 
  viewBox: '0 0 24 24', 
  fill: 'none', 
  stroke: 'currentColor', 
  strokeWidth: '2', 
  strokeLinecap: 'round', 
  strokeLinejoin: 'round' 
}, [
  h('polygon', { points: '22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3' })
]);

const EyeIcon = () => h('svg', { 
  xmlns: 'http://www.w3.org/2000/svg', 
  width: '24', 
  height: '24', 
  viewBox: '0 0 24 24', 
  fill: 'none', 
  stroke: 'currentColor', 
  strokeWidth: '2', 
  strokeLinecap: 'round', 
  strokeLinejoin: 'round' 
}, [
  h('path', { d: 'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' }),
  h('circle', { cx: '12', cy: '12', r: '3' })
]);

const projects = ref([
  {
    type: 'IP Protection Application',
    title: 'Artificial Intelligence in Healthcare: Developing AI Algorithms for Early Disease Detection',
    department: 'College of Computer Studies',
    date: '03-22-25',
    status: 'Approved'
  },
  {
    type: 'Request for Joining Competition',
    title: 'The Role of AI in Enhancing Medical Diagnostics Accuracy',
    department: 'College of Pharmacy',
    date: '01-30-25',
    status: 'Pending'
  },
  {
    type: 'IP Protection Application',
    title: 'Machine Learning Techniques for Identifying Genetic Markers in Diseases',
    department: 'College of Pharmacy',
    date: '01-14-25',
    status: 'Pending'
  },
  {
    type: 'IP Protection Application',
    title: 'AI-Based Solutions for Optimizing Hospital Resource Allocation',
    department: 'College of Pharmacy',
    date: '03-22-25',
    status: 'Rejected'
  },
  {
    type: 'IP Protection Application',
    title: 'The Impact of AI on Business Management and Operational Efficiency',
    department: 'College of Accounting and Business Education',
    date: '02-03-25',
    status: 'Approved'
  }
]);

const getStatusClass = (status) => {
  switch (status) {
    case 'Approved':
      return 'status-approved';
    case 'Pending':
      return 'status-pending';
    case 'Rejected':
      return 'status-rejected';
    default:
      return '';
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

html, body {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.app-container {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: #f8f9fa;
}

.app-header {
  background-color: white;
  padding: 1.5rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  height: 80px;
  min-height: 80px;
}

h1 {
  color: #ff7b9c;
  font-size: 2rem;
  font-weight: 600;
}

.search-container {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.search-input {
  padding: 0.75rem 1.25rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  width: 300px;
  font-size: 1rem;
}

.search-button, .filter-button {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
}

.search-icon, .filter-icon {
  width: 20px;
  height: 20px;
  color: #666;
}

.table-container {
  flex: 1;
  padding: 2rem 3rem;
  overflow: auto;
}

table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

thead {
  background-color: #ff7b9c;
  position: sticky;
  top: 0;
  z-index: 1;
}

thead tr th:first-child {
  border-top-left-radius: 8px;
}

thead tr th:last-child {
  border-top-right-radius: 8px;
}

th, td {
  padding: 1.25rem 1.5rem;
  text-align: left;
  border-bottom: 1px solid #eee;
}

th {
  font-weight: 600;
  color: white;
  font-size: 1rem;
}

td {
  font-size: 0.95rem;
}

tbody tr:hover {
  background-color: #f8f9fa;
}

tbody tr:last-child td {
  border-bottom: none;
}

.filter-row {
  background-color: #f5f5f5;
}

.filter-input-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.filter-input {
  padding: 0.625rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
  font-size: 0.9rem;
}

.filter-input-button {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
}

.filter-input-icon {
  width: 16px;
  height: 16px;
  color: #666;
}

.view-button {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.view-button:hover {
  background-color: #fff0f3;
}

.view-icon {
  width: 22px;
  height: 22px;
  color: #ff7b9c;
}

.status-approved {
  color: #28a745;
  font-weight: 600;
}

.status-pending {
  color: #ffc107;
  font-weight: 600;
}

.status-rejected {
  color: #dc3545;
  font-weight: 600;
}

@media (max-width: 1280px) {
  .app-header {
    padding: 1.5rem 2rem;
  }
  
  .table-container {
    padding: 1.5rem 2rem;
  }
  
  .search-input {
    width: 250px;
  }
}

@media (max-width: 768px) {
  .app-header {
    padding: 1rem;
    height: auto;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .search-container {
    width: 100%;
  }
  
  .search-input {
    flex-grow: 1;
  }
  
  .table-container {
    padding: 1rem;
  }
  
  th, td {
    padding: 1rem;
    font-size: 0.9rem;
  }
}
</style>