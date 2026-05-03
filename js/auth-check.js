// VocationalHub Admin Protection System
const authClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function verifySession() {
    // Hide body immediately to prevent flicker of sensitive content
    document.documentElement.style.visibility = 'hidden';
    
    try {
        const { data: { session } } = await authClient.auth.getSession();
        if (!session) {
            window.location.href = '../login.html';
            return null;
        }
        // Session valid, show content
        document.documentElement.style.visibility = 'visible';
        return session;
    } catch (err) {
        console.error('Auth Error:', err);
        window.location.href = '../login.html';
        return null;
    }
}

async function handleLogout() {
    if (confirm('Apakah Anda yakin ingin keluar dari sesi admin?')) {
        await authClient.auth.signOut();
        window.location.href = '../login.html';
    }
}

// Auto-run session check
verifySession();

// Initialize UI elements when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Attach logout functionality to any logout button
    const logoutBtns = document.querySelectorAll('a[href="../index.html"], a[href*="logout"]');
    logoutBtns.forEach(btn => {
        if (btn.innerText.includes('Keluar') || btn.innerText.includes('Logout')) {
            btn.href = 'javascript:void(0)';
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                handleLogout();
            });
        }
    });
});
