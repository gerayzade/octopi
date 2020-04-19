import prisma from '~/prisma';
import { mergeChildProps } from '~/utils/other';

export const getAllActivities = async () => {
  const activities = await prisma.activity.findMany();

  return activities;
}

export const getUserActivities = async (user) => {
  const activities = await prisma.userActivity.findMany({
    where: { userId: user.id },
    include: { activity: { select: { title: true } } }
  })
  
  return mergeChildProps('activity', activities);
}

export const updateUserActivities = async (user, { created, updated, deleted  }) => {
  const activities = await prisma.user.update({ 
    where: { id: user.id },
    data: {
      activities: {
        create: (created || []).map(({ data, activityId }) => ({
          ...data, activity: { connect: { id: activityId } }
        })),
        update: (updated || []).map(({ data, activityId }) => ({ 
          data: { 
            ...data, activity: { connect: { id: activityId } } 
          }, 
          where: { id: data.id } 
        })),
        delete: (deleted || []).map(id => { id })
      }
    }
  });

  return activities;
}