export const fetchNotifications = () => {
return Promise.resolve({
data: {
notifications: [
{
ID: "1",
Type: "Placement",
Message: "CSX Corporation hiring",
Timestamp: "2026-04-22 17:51:18"
},
{
ID: "2",
Type: "Result",
Message: "Mid Sem Results Released",
Timestamp: "2026-04-22 17:50:54"
},
{
ID: "3",
Type: "Event",
Message: "Tech Fest Registration Open",
Timestamp: "2026-04-22 17:50:06"
}
]
}
});
};
