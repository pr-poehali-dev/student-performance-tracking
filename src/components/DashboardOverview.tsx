import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DashboardOverview = () => {
  const stats = [
    { title: "Всего студентов", value: "247", icon: "👥", trend: "+12" },
    { title: "Средний балл", value: "4.2", icon: "📊", trend: "+0.3" },
    { title: "Отличников", value: "45", icon: "🌟", trend: "+5" },
    { title: "Должников", value: "12", icon: "⚠️", trend: "-3" },
  ];

  const recentActivity = [
    { student: "Иванов А.И.", subject: "Математика", grade: 5, time: "10:30" },
    { student: "Петрова М.С.", subject: "Физика", grade: 4, time: "11:15" },
    { student: "Сидоров В.К.", subject: "Химия", grade: 5, time: "12:00" },
    { student: "Козлова Е.Н.", subject: "История", grade: 3, time: "14:20" },
  ];

  return (
    <div className="space-y-6">
      {/* Статистические карточки */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <span className="text-2xl">{stat.icon}</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-800">
                {stat.value}
              </div>
              <p className="text-xs text-green-600 mt-1">
                {stat.trend} за месяц
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Последние активности */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-gray-800">
            📝 Последние оценки
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex-1">
                  <p className="font-medium text-gray-800">
                    {activity.student}
                  </p>
                  <p className="text-sm text-gray-600">{activity.subject}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      activity.grade === 5
                        ? "bg-green-100 text-green-800"
                        : activity.grade === 4
                          ? "bg-blue-100 text-blue-800"
                          : activity.grade === 3
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                    }`}
                  >
                    {activity.grade}
                  </span>
                  <span className="text-sm text-gray-500">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardOverview;
