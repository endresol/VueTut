using Microsoft.EntityFrameworkCore;


namespace Agilite.Entities
{
    public class AnimalContext : DbContext
    {
        public AnimalContext(DbContextOptions<AnimalContext> options) :base(options)
        { 
            // Database.Migrate();
        }
        public DbSet<Animal> Animals {get; set;}
    }
}