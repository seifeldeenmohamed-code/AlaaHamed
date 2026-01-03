export type IconName =
    | 'Home' | 'Library' | 'Award' | 'BookOpen' | 'Video'
    | 'HeartHandshake' | 'Users' | 'BookHeart' | 'Clapperboard' | 'BookMarked'
    | 'GraduationCap' | 'Sparkles' | 'ClipboardCheck' | 'Repeat' | 'Sun'
    | 'Moon' | 'FileText' | 'UserCircle' | 'MicVocal' | 'Mail' | 'Lock' | 'X'
    | 'ExternalLink';

export interface Video {
    id: string;
    title: string;
    videoId: string | null;
}

export interface Series {
    id: string;
    title: string;
    description: string;
    icon: IconName;
    category: 'course' | 'recitation';
    videos: Video[];
}

export interface Task {
    id: string;
    text: string;
    points: number;
}
