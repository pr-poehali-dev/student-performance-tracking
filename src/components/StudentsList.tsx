import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const StudentsList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const students = [
    {
      id: 1,
      name: "Иванов Алексей Иванович",
      group: "ИС-21-1",
      avgGrade: 4.8,
      status: "Отличник",
    },
    {
      id: 2,
      name: "Петрова Мария Сергеевна",
      group: "ИС-21-1",
      avgGrade: 4.2,
      status: "Хорошист",
    },
    {
      id: 3,
      name: "Сидоров Владимир Константинович",
      group: "ИС-21-2",
      avgGrade: 3.7,
      status: "Троечник",
    },
    {
      id: 4,
      name: "Козлова Елена Николаевна",
      group: "ИС-21-2",
      avgGrade: 4.5,
      status: "Хорошист",
    },
    {
      id: 5,
      name: "Смирнов Дмитрий Александрович",
      group: "ИС-21-1",
      avgGrade: 4.9,
      status: "Отличник",
    },
    {
      id: 6,
      name: "Морозова Анна Викторовна",
      group: "ИС-21-3",
      avgGrade: 3.9,
      status: "Троечник",
    },
  ];

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.group.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Отличник":
        return "bg-green-100 text-green-800";
      case "Хорошист":
        return "bg-blue-100 text-blue-800";
      case "Троечник":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <CardTitle className="text-xl text-gray-800">
            👥 Список студентов
          </CardTitle>
          <div className="flex gap-2 w-full sm:w-auto">
            <Input
              placeholder="Поиск студентов..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-64"
            />
            <Button variant="outline">➕ Добавить</Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ФИО</TableHead>
                <TableHead>Группа</TableHead>
                <TableHead>Средний балл</TableHead>
                <TableHead>Статус</TableHead>
                <TableHead>Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStudents.map((student) => (
                <TableRow key={student.id} className="hover:bg-gray-50">
                  <TableCell className="font-medium">{student.name}</TableCell>
                  <TableCell>{student.group}</TableCell>
                  <TableCell>
                    <span className="font-mono text-lg">
                      {student.avgGrade}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(student.status)}`}
                    >
                      {student.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        👁️
                      </Button>
                      <Button variant="ghost" size="sm">
                        ✏️
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudentsList;
