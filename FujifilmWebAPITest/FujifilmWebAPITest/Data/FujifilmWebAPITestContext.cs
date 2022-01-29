using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using FujifilmWebAPITest.Models;

namespace FujifilmWebAPITest.Data
{
    public class FujifilmWebAPITestContext : DbContext
    {
        public FujifilmWebAPITestContext (DbContextOptions<FujifilmWebAPITestContext> options)
            : base(options)
        {
        }
        public DbSet<FujifilmWebAPITest.Models.Item> Item { get; set; }
    }
}
