const base = '/api/getStats'

export const getStats = async () => {
    try {
        const res = await fetch(`${base}`,{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        const data = await res.json();
        return data;
        console.log('stats response:', data);
    } catch (error) {
        console.error('Error fetching stats:', error);
        throw error;
    }
};