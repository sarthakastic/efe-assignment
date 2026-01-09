import { mockEmployees, type Employee } from '../data';


/**
 * Simulate API delay
 */
const delay = (ms: number = 300): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

/**
 * Fetch all employees
 * Simulates GET /api/employees
 */
const getAllEmployees = async (): Promise<Employee[]> => {
  await delay(300);
  return Promise.resolve([...mockEmployees]);
};



// Create and export the API object with functional methods
export const employeeApi = {
  getAllEmployees,
};


export type { Employee };


export default employeeApi;

