using CRMTest2.Models.Enities;
using Microsoft.EntityFrameworkCore;

namespace CRMTest2.Core
{
    public class CRMAppContext : DbContext
    {
        public CRMAppContext(DbContextOptions<CRMAppContext> options) : base(options) { }

        public DbSet<Contact> Contacts { get; set; }
    }
}
