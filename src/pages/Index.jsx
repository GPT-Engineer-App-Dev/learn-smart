import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-3xl font-bold">Welcome to the Coding Learning Platform</h1>
        <p className="text-muted-foreground">Your journey to becoming a coding expert starts here.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Featured Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Course 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Learn the basics of coding with this introductory course.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Course 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Intermediate course to enhance your coding skills.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Course 3</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Advanced topics for experienced coders.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
        <ul className="space-y-2">
          <li className="p-4 border rounded-lg">User A completed Course 1</li>
          <li className="p-4 border rounded-lg">User B started Course 2</li>
          <li className="p-4 border rounded-lg">User C achieved a new milestone</li>
        </ul>
      </section>
    </div>
  );
};

export default Index;