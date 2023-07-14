from django.db import models

# Create your models here.
class Users(models.Model):
    first_name = models.CharField("First Name", max_length=240)
    last_name = models.CharField("Last Name", max_length=240)
    email = models.EmailField()
    access_level = models.CharField(max_length=20)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

class Department(models.Model):
    code = models.CharField(max_length=3, unique=True)
    name = models.CharField(max_length=240)

    def __str__(self):
        return self.name    

class Donations(models.Model):
    year = models.IntegerField()
    pi_name = models.CharField("PI Name", max_length=240)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    proposal = models.CharField("Proposal", max_length=240, unique=True)
    sponsor = models.CharField("Sponsor", max_length=240)
    title = models.TextField()
    project_type = models.CharField("Project Type", max_length=240)
    sponsor_type = models.CharField("Sponsor Type", max_length=240)
    status = models.CharField("Status", max_length=240)
    award_number = models.CharField("Award Number", max_length=240)
    total_amount = models.DecimalField(decimal_places=2)
    amount_used = models.DecimalField(decimal_places=2)