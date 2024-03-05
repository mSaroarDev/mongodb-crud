import prisma from '@/libs/db';
import React from 'react';
import Employee from './Employee';

export const revalidate = 0;
const AllEmp = async () => {
    const employees = await prisma.users.findMany();

    return (
        <div className='emp-container'>
            <div className='employess'>
                {employees && employees.map((employee)=> <Employee key={employee.id} data={employee} />)}
            </div>            
        </div>
    );
};

export default AllEmp;