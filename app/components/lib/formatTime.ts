export const formatTime = (date: any) => {
    const now: any = new Date();
    const saved: any = new Date(date);
    const diffMs = now - saved;

    if (diffMs < 1000 * 60) {
        return `${Math.floor(diffMs / 1000)}s`;
    }
    if (diffMs < 1000 * 60 * 60) {
        return `${Math.floor(diffMs / (1000 * 60))}m`;
    }
    if (diffMs < 1000 * 60 * 60 * 24) {
        return saved.toTimeString().slice(0, 5);
    }
    if (diffMs < 1000 * 60 * 60 * 24 * 30) {
        return `${saved.toTimeString().slice(0, 5)}, ${saved.getDate()}/${
            saved.getMonth() + 1
        }`;
    }
    return `${saved.toTimeString().slice(0, 5)}, ${saved.getDate()}/${
        saved.getMonth() + 1
    }/${saved.getFullYear()}`;
};
