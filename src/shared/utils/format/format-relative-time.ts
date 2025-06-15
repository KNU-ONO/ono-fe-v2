export const formatRelativeTime = (createdAt: string | Date): string => {
  const now = new Date();
  const created = new Date(createdAt);

  const diffMs = now.getTime() - created.getTime();

  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  const month = 30 * day;
  const year = 365 * day;

  if (diffMs < hour) {
    const minutes = Math.floor(diffMs / minute);
    return minutes <= 0 ? '방금 전' : `${minutes}분 전`;
  } else if (diffMs < day) {
    const hours = Math.floor(diffMs / hour);
    return `${hours}시간 전`;
  } else if (diffMs < month) {
    const days = Math.floor(diffMs / day);
    return `${days}일 전`;
  } else if (diffMs < year) {
    const months = Math.floor(diffMs / month);
    return `${months}달 전`;
  } else {
    const years = Math.floor(diffMs / year);
    return `${years}년 전`;
  }
};
