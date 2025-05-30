import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const GradesManager = () => {
  const [selectedSubject, setSelectedSubject] = useState("Математика");

  const subjects = [
    "Математика",
    "Физика",
    "Химия",
    "История",
    "Английский язык",
  ];

  const grades = [
    { student: "Иванов А.И.", midterm: 5, final: 5, current: 4.8, total: 4.9 },
    { student: "Петрова М.С.", midterm: 4, final: 4, current: 4.2, total: 4.1 },
    { student: "Сидоров В.К.", midterm: 3, final: 4, current: 3.5, total: 3.6 },
    { student: "Козлова Е.Н.", midterm: 5, final: 4, current: 4.3, total: 4.4 },
    { student: "Смирнов Д.А.", midterm: 5, final: 5, current: 4.9, total: 4.9 },
  ];

  const getGradeColor = (grade: number) => {
    if (grade >= 4.5) return "text-green-600 font-bold";
    if (grade >= 3.5) return "text-blue-600 font-bold";
    if (grade >= 2.5) return "text-yellow-600 font-bold";
    return "text-red-600 font-bold";
  };

  return (
    <div className="space-y-6">
      {/* Выбор предмета */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-gray-800">
            📝 Управление оценками
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {subjects.map((subject) => (
              <Button
                key={subject}
                variant={selectedSubject === subject ? "default" : "outline"}
                onClick={() => setSelectedSubject(subject)}
                className="mb-2"
              >
                {subject}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Таблица оценок */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg">
              Оценки по предмету:{" "}
              <span className="text-violet-600">{selectedSubject}</span>
            </CardTitle>
            <Button>➕ Добавить оценку</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Студент</TableHead>
                  <TableHead>Промежуточная</TableHead>
                  <TableHead>Итоговая</TableHead>
                  <TableHead>Текущий рейтинг</TableHead>
                  <TableHead>Общий балл</TableHead>
                  <TableHead>Действия</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {grades.map((grade, index) => (
                  <TableRow key={index} className="hover:bg-gray-50">
                    <TableCell className="font-medium">
                      {grade.student}
                    </TableCell>
                    <TableCell>
                      <span
                        className={`text-lg ${getGradeColor(grade.midterm)}`}
                      >
                        {grade.midterm}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className={`text-lg ${getGradeColor(grade.final)}`}>
                        {grade.final}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span
                        className={`text-lg ${getGradeColor(grade.current)}`}
                      >
                        {grade.current}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span
                        className={`text-lg font-bold ${getGradeColor(grade.total)}`}
                      >
                        {grade.total}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm">
                          ✏️
                        </Button>
                        <Button variant="ghost" size="sm">
                          📊
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
    </div>
  );
};

export default GradesManager;
