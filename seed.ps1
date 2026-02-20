$headers = @{ "x-admin-token" = "AppSetz@2025"; "Content-Type" = "application/json" }
$url = "http://localhost:3000/api/projects/admin"

$projects = @(
    @{
        title = "Goalzy"
        description = "An AI-powered habit tracking application designed to help users build consistency and self-discipline intelligently. Features include AI-based habit suggestions, smart progress analytics, streak tracking, and personalized productivity recommendations. The goal is to move beyond traditional habit trackers by using AI to analyze patterns and help users improve faster."
        techStack = @("AI", "Mobile App", "Behavioral Tech")
        images = @("/assets/project-images/placeholder.png")
        isPublished = $true
    },
    @{
        title = "PocketGrocer"
        description = "An AI-powered grocery comparison platform that helps users find the best deals across multiple stores. Features include real-time price comparison, AI-based savings suggestions, smart shopping list optimization, and budget tracking. Aimed at helping users save money by making smart, data-driven grocery buying decisions."
        techStack = @("AI", "E-commerce", "Price Comparison")
        images = @("/assets/project-images/placeholder.png")
        isPublished = $true
    },
    @{
        title = "Slipto"
        description = "A modern expense-sharing application designed for friends, roommates, and teams. Features include group expense management, real-time in-app chat, instant balance calculations, and simplified settlement tracking. Designed to make splitting expenses transparent, simple, and communication-friendly."
        techStack = @("Fintech", "Real-time", "Social")
        images = @("/assets/project-images/placeholder.png")
        isPublished = $true
    },
    @{
        title = "Sunwin Solar Power Solutions"
        description = "A professional corporate landing website designed for a solar energy solutions company. Features include a clean corporate layout, service showcase sections, lead generation forms, trust-building testimonials, and SEO-optimized structure. Built to establish credibility and generate qualified leads for solar installation services."
        techStack = @("Web Design", "Corporate", "SEO")
        images = @("/assets/project-images/placeholder.png")
        isPublished = $true
    },
    @{
        title = "Vriddhi Psychological Services"
        description = "A calming and professional landing page built for a psychological counseling service. Features include emotion-focused design, service explanation sections, appointment booking integration, trust-focused content layout, and soft, welcoming UI elements. Creates a safe, approachable, and professional online presence for mental health services."
        techStack = @("Web Design", "Healthcare", "UI/UX")
        images = @("/assets/project-images/placeholder.png")
        isPublished = $true
    }
)

foreach ($p in $projects) {
    $body = $p | ConvertTo-Json -Depth 10
    try {
        $response = Invoke-RestMethod -Uri $url -Method Post -Headers $headers -Body $body
        Write-Host "Created $($p.title): $($response.id)"
    } catch {
        Write-Error "Failed to create $($p.title): $_"
    }
}
