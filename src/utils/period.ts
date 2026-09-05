const ONGOING = /present|nåværende/i

export function isOngoing(period: string): boolean {
    return ONGOING.test(period)
}
