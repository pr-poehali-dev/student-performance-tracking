import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardOverview from "@/components/DashboardOverview";
import StudentsList from "@/components/StudentsList";
import GradesManager from "@/components/GradesManager";
import RankingDisplay from "@/components/RankingDisplay";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Академическая Информационная Система
          </h1>
          <p className="text-lg text-gray-600">
            Управление успеваемостью и рейтингом студентов
          </p>
        </header>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="overview" className="text-sm font-medium">
              📊 Обзор
            </TabsTrigger>
            <TabsTrigger value="students" className="text-sm font-medium">
              👥 Студенты
            </TabsTrigger>
            <TabsTrigger value="grades" className="text-sm font-medium">
              📝 Оценки
            </TabsTrigger>
            <TabsTrigger value="ranking" className="text-sm font-medium">
              🏆 Рейтинг
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="animate-fade-in">
            <DashboardOverview />
          </TabsContent>

          <TabsContent value="students" className="animate-fade-in">
            <StudentsList />
          </TabsContent>

          <TabsContent value="grades" className="animate-fade-in">
            <GradesManager />
          </TabsContent>

          <TabsContent value="ranking" className="animate-fade-in">
            <RankingDisplay />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
