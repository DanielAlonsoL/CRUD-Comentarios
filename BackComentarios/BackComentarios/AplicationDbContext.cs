using Microsoft.EntityFrameworkCore;
using BackComentarios.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackComentarios
{
    public class AplicationDbContext : DbContext
    {
        public DbSet<Comentario> Comentario { get; set; }
        public AplicationDbContext()
        {

        }
        public AplicationDbContext(DbContextOptions options) : base(options)
        {

        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseMySql("Server=localhost;Database=DANmysql;Uid=root;Pwd=daniel");

            }
        }
    }
}
