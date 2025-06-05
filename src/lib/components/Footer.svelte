<script>
import { BUILD_COMMIT } from '$lib/build-info';
</script>
<footer class="bg-gray-900 text-gray-400 py-8 mt-auto">
    <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="mb-4 md:mb-0">
                <p>&copy; {new Date().getFullYear()} Michael Distel. All rights reserved.</p>
                <p class="text-xs text-gray-500 mt-1">Build: {BUILD_COMMIT}</p>
            </div>
            <div class="flex flex-wrap justify-center gap-4">
                <a href="/privacy" class="text-[rgb(96,165,250)] hover:text-[rgb(96,165,250)]/80 transition-colors">Privacy & Cookie Policy</a>
            </div>
        </div>
    </div>
</footer> 