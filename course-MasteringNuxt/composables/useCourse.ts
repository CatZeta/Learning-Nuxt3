import courseData from './courseData';

// Define the types for the course data(ts)
type Lesson = {
  title: string;
  slug: string;
  number: number;
  downloadUrl: string;
  videoId: number;
  text: string;
  sourceUrl?: string;
  path: string;
};

type Chapter = {
  title: string;
  slug: string;
  number: number;
  lessons: Lesson[];
};

type Course = {
  title: string;
  chapters: Chapter[];
};

// Define a function that returns a course object
export const useCourse = (): Course => {
  // Map over the chapters in the course data and create a new array of chapters
  const chapters: Chapter[] = courseData.chapters.map(
    (chapter) => {
      // Map over the lessons in the chapter and create a new array of lessons
      const lessons: Lesson[] = chapter.lessons.map(
        (lesson) => ({
          // Spread the properties of the lesson object and add a new property for the path
          ...lesson,
          path: `/course/chapter/${chapter.slug}/lesson/${lesson.slug}`,
        })
      );
      // Spread the properties of the chapter object and add a new property for the lessons array
      return {
        ...chapter,
        lessons,
      };
    }
  );
  // Spread the properties of the course data object and add a new property for the chapters array
  return {
    ...courseData,
    chapters,
  };
};
