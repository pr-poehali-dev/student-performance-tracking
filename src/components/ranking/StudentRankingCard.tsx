import React from "react";
import { Student } from "@/types/ranking";
import { getRankIcon, getTrendColor } from "@/utils/ranking";

interface StudentRankingCardProps {
  student: Student;
}

const StudentRankingCard: React.FC<StudentRankingCardProps> = ({ student }) => {
  return (
    <div
      className={`flex items-center justify-between p-4 rounded-lg border-2 transition-all hover:shadow-md ${
        student.rank <= 3
          ? "bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200"
          : "bg-gray-50 border-gray-200"
      }`}
    >
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">{getRankIcon(student.rank)}</span>
          <span className="text-lg font-bold text-gray-600">
            #{student.rank}
          </span>
        </div>
        <div>
          <p className="font-semibold text-gray-800">{student.name}</p>
          <p className="text-sm text-gray-600">{student.group}</p>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <span className="text-xl font-bold text-violet-600">
          {student.avgGrade}
        </span>
        <span className={`text-xl ${getTrendColor(student.trend)}`}>
          {student.trend}
        </span>
      </div>
    </div>
  );
};

export default StudentRankingCard;
