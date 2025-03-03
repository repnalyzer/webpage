import Link from "next/link"
import { ArrowRight, Code, Database, Github, GitBranch, GitPullRequest, LineChart, Terminal, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-2 items-center text-xl font-bold">
            <Terminal className="h-6 w-6" />
            <span>Repnalyzer</span>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Link
                href="#features"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Features
              </Link>
              <Link
                href="#installation"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Installation
              </Link>
              <Link
                href="#examples"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Examples
              </Link>
              <Button size="sm">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Analyze GitHub Repositories Like a Pro
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Repnalyzer is a powerful CLI tool that helps you fetch and analyze GitHub organization statistics
                    with ease.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1">
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    View on GitHub
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-[600px] overflow-hidden rounded-lg border bg-background p-2 shadow-xl">
                  <div className="flex items-center border-b bg-muted/50 px-4 py-2">
                    <div className="flex gap-1">
                      <div className="h-3 w-3 rounded-full bg-red-500" />
                      <div className="h-3 w-3 rounded-full bg-yellow-500" />
                      <div className="h-3 w-3 rounded-full bg-green-500" />
                    </div>
                    <div className="ml-4 text-sm font-medium">Terminal</div>
                  </div>
                  <div className="p-4 text-sm text-muted-foreground">
                    <pre className="font-mono">
                      <code className="text-green-500">$ </code>
                      <code>repnalyzer analyze vercel/next.js</code>
                      <br />
                      <code className="text-yellow-500">Analyzing repository: vercel/next.js...</code>
                      <br />
                      <br />
                      <code className="text-blue-500">Repository Statistics:</code>
                      <br />
                      <code>- Contributors: 2,453</code>
                      <br />
                      <code>- Open Issues: 1,247</code>
                      <br />
                      <code>- Pull Requests: 342</code>
                      <br />
                      <code>- Stars: 114,892</code>
                      <br />
                      <code>- Forks: 24,673</code>
                      <br />
                      <br />
                      <code className="text-blue-500">Top Contributors:</code>
                      <br />
                      <code>1. @timneutkens (Admin)</code>
                      <br />
                      <code>2. @ijjk (Maintainer)</code>
                      <br />
                      <code>3. @shuding (Maintainer)</code>
                      <br />
                      <br />
                      <code className="text-blue-500">Connected APIs:</code>
                      <br />
                      <code>- GitHub Actions API</code>
                      <br />
                      <code>- Vercel Deployment API</code>
                      <br />
                      <code>- NPM Registry API</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Features</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Everything You Need to Analyze GitHub Repositories
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Repnalyzer provides comprehensive insights into GitHub repositories with powerful analytics features.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <Users className="h-6 w-6 mb-2 text-primary" />
                  <CardTitle>Contributor Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    List all contributors with their authority levels, activity metrics, and contribution history.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <Database className="h-6 w-6 mb-2 text-primary" />
                  <CardTitle>API Connections</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Identify all APIs connected to the repository, including webhooks, integrations, and service
                    connections.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <GitPullRequest className="h-6 w-6 mb-2 text-primary" />
                  <CardTitle>PR Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Analyze pull request patterns, review times, merge rates, and contributor engagement.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <Code className="h-6 w-6 mb-2 text-primary" />
                  <CardTitle>Code Quality Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Evaluate code quality through automated analysis of patterns, complexity, and test coverage.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <GitBranch className="h-6 w-6 mb-2 text-primary" />
                  <CardTitle>Branch Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Track branch health, protection rules, and merge strategies across the repository.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <LineChart className="h-6 w-6 mb-2 text-primary" />
                  <CardTitle>Activity Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Visualize repository activity over time with customizable charts and reports.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="installation" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Installation</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get Started in Seconds</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Repnalyzer is easy to install and use. Follow these simple steps to get started.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <Tabs defaultValue="npm" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="npm">npm</TabsTrigger>
                  <TabsTrigger value="yarn">Yarn</TabsTrigger>
                  <TabsTrigger value="pnpm">pnpm</TabsTrigger>
                </TabsList>
                <TabsContent value="npm" className="mt-4">
                  <Card>
                    <CardContent className="p-6">
                      <pre className="bg-muted rounded-lg p-4 overflow-x-auto">
                        <code>npm install -g repnalyzer</code>
                      </pre>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="yarn" className="mt-4">
                  <Card>
                    <CardContent className="p-6">
                      <pre className="bg-muted rounded-lg p-4 overflow-x-auto">
                        <code>yarn global add repnalyzer</code>
                      </pre>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="pnpm" className="mt-4">
                  <Card>
                    <CardContent className="p-6">
                      <pre className="bg-muted rounded-lg p-4 overflow-x-auto">
                        <code>pnpm add -g repnalyzer</code>
                      </pre>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
              <div className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Authentication Setup</CardTitle>
                    <CardDescription>
                      Repnalyzer requires a GitHub personal access token to access repository data.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>
                        Create a GitHub personal access token with <code>repo</code> scope
                      </li>
                      <li>Set the token as an environment variable or in your config file:</li>
                    </ol>
                    <pre className="bg-muted rounded-lg p-4 mt-4 overflow-x-auto">
                      <code>export GITHUB_TOKEN=your_token_here</code>
                    </pre>
                    <p className="mt-4">
                      Or create a config file at <code>~/.repnalyzer/config.json</code>:
                    </p>
                    <pre className="bg-muted rounded-lg p-4 mt-2 overflow-x-auto">
                      <code>{`{
  "github": {
    "token": "your_token_here"
  }
}`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section id="examples" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Examples</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">See Repnalyzer in Action</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore common use cases and examples of Repnalyzer commands.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-4xl py-12">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Analyze Repository Contributors</CardTitle>
                  <CardDescription>
                    List all contributors with their authority levels and contribution statistics.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted rounded-lg p-4 overflow-x-auto">
                    <code>repnalyzer contributors facebook/react --sort=commits</code>
                  </pre>
                  <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                    <div className="text-sm font-mono">
                      <p className="text-blue-500 font-semibold">Contributors for facebook/react:</p>
                      <p className="mt-2">1. @gaearon (Admin) - 2,453 commits</p>
                      <p>2. @acdlite (Maintainer) - 1,872 commits</p>
                      <p>3. @bvaughn (Maintainer) - 1,654 commits</p>
                      <p>4. @sebmarkbage (Maintainer) - 1,432 commits</p>
                      <p>5. @trueadm (Maintainer) - 1,245 commits</p>
                      <p className="text-muted-foreground mt-2">... and 1,245 more contributors</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Identify Connected APIs</CardTitle>
                  <CardDescription>List all APIs and services connected to a repository.</CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted rounded-lg p-4 overflow-x-auto">
                    <code>repnalyzer apis vercel/next.js</code>
                  </pre>
                  <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                    <div className="text-sm font-mono">
                      <p className="text-blue-500 font-semibold">Connected APIs for vercel/next.js:</p>
                      <p className="mt-2">1. GitHub Actions API (active)</p>
                      <p>2. Vercel Deployment API (active)</p>
                      <p>3. NPM Registry API (active)</p>
                      <p>4. CircleCI API (inactive)</p>
                      <p>5. Codecov API (active)</p>
                      <p className="text-muted-foreground mt-2">Total: 12 connected APIs (8 active, 4 inactive)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Generate Activity Report</CardTitle>
                  <CardDescription>Create a comprehensive activity report for a repository.</CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted rounded-lg p-4 overflow-x-auto">
                    <code>repnalyzer report microsoft/vscode --period=30d --format=json</code>
                  </pre>
                  <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                    <div className="text-sm font-mono">
                      <p className="text-blue-500 font-semibold">
                        Activity Report for microsoft/vscode (Last 30 days):
                      </p>
                      <p className="mt-2">- New commits: 1,245</p>
                      <p>- Pull requests: 432 (324 merged, 56 closed, 52 open)</p>
                      <p>- Issues: 876 (543 closed, 333 open)</p>
                      <p>- New contributors: 24</p>
                      <p>- Code changes: +45,678 / -32,456 lines</p>
                      <p className="text-muted-foreground mt-2">Report saved to vscode-activity-report.json</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to Analyze Your Repositories?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get started with Repnalyzer today and unlock powerful insights into your GitHub repositories.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="gap-1">
                  Install Repnalyzer
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  <Github className="mr-2 h-4 w-4" />
                  Star on GitHub
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex gap-2 items-center text-lg font-semibold">
            <Terminal className="h-5 w-5" />
            <span>Repnalyzer</span>
          </div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 Repnalyzer. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Documentation
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              GitHub
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Twitter
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

