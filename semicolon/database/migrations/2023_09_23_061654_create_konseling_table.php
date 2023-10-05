<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('konseling', function (Blueprint $table) {
            $table->id(); // Id sebagai primary key
            $table->unsignedBigInteger('id_client'); // Kolom untuk foreign key ke tabel 'client'
            $table->unsignedBigInteger('id_counselor'); // Kolom untuk foreign key ke tabel 'counselor'
            $table->date('hari'); // Kolom untuk tanggal hari konseling
            $table->dateTime('tanggal_jam'); // Kolom untuk tanggal dan jam konseling
            
            // Definisi foreign key constraints
            $table->foreign('id_client')->references('id')->on('users');
            $table->foreign('id_counselor')->references('id')->on('counselor');
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('konseling');
    }
};
