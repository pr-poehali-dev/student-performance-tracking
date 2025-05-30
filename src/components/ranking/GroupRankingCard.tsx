import React from "react";
import { GroupStat } from "@/types/ranking";
import {
  getRankIcon,
  getGroupRankStyles,
  getGroupBadgeStyles,
} from "@/utils/ranking";

interface GroupRankingCardProps {
  group: GroupStat;
}

const GroupRankingCard: React.FC<GroupRankingCardProps> = ({ group }) => {
  return (
    <div
      className={`p-6 rounded-lg border-2 text-center transition-all hover:shadow-lg ${getGroupRankStyles(
        group.rank,
      )}`}
    >
      <div className="text-3xl mb-2">{getRankIcon(group.rank)}</div>
      <h3 className="text-lg font-bold text-gray-800 mb-1">{group.group}</h3>
      <p className="text-2xl font-bold text-violet-600 mb-2">
        {group.avgGrade}
      </p>
      <p className="text-sm text-gray-600">{group.students} студентов</p>
      <div
        className={`mt-3 px-3 py-1 rounded-full text-xs font-medium inline-block ${getGroupBadgeStyles(
          group.rank,
        )}`}
      >
        {group.rank} место
      </div>
    </div>
  );
};

export default GroupRankingCard;
