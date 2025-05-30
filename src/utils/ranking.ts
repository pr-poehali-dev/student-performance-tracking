export const getRankIcon = (rank: number): string => {
  switch (rank) {
    case 1:
      return "🥇";
    case 2:
      return "🥈";
    case 3:
      return "🥉";
    default:
      return "🏅";
  }
};

export const getTrendColor = (trend: string): string => {
  switch (trend) {
    case "↑":
      return "text-green-500";
    case "↓":
      return "text-red-500";
    default:
      return "text-gray-500";
  }
};

export const getGroupRankStyles = (rank: number): string => {
  switch (rank) {
    case 1:
      return "bg-gradient-to-b from-yellow-50 to-yellow-100 border-yellow-300";
    case 2:
      return "bg-gradient-to-b from-gray-50 to-gray-100 border-gray-300";
    default:
      return "bg-gradient-to-b from-orange-50 to-orange-100 border-orange-300";
  }
};

export const getGroupBadgeStyles = (rank: number): string => {
  switch (rank) {
    case 1:
      return "bg-green-100 text-green-800";
    case 2:
      return "bg-blue-100 text-blue-800";
    default:
      return "bg-orange-100 text-orange-800";
  }
};
